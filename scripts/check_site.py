from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

root = Path(__file__).resolve().parents[1] / 'protocol-page/dist'
class Check(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.refs = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.append(a['id'])
        for key in ('href', 'src'):
            if a.get(key): self.refs.append(a[key])
        if tag == 'img': assert a.get('alt'), 'Image alt missing'
p = Check()
p.feed((root / 'index.html').read_text())
assert len(p.ids) == len(set(p.ids)), 'Duplicate IDs'
for ref in p.refs:
    url = urlsplit(ref)
    assert url.scheme != 'file', 'Local absolute file link'
    if url.scheme or url.netloc: continue
    if url.path: assert (root / unquote(url.path)).is_file(), ref
    elif url.fragment: assert unquote(url.fragment) in p.ids, ref
assert (root / 'app.js').is_file()
assert (root / 'style.css').is_file()
print('PASS: local assets, anchors, IDs and image descriptions')

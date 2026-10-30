const programs=[{"type": "LESSON 01 / 웰니스의 중요성", "name": "UNDERSTAND YOUR WELLNESS", "slogan": "몸무게 너머,|내 일상을 살펴봐요.", "target": "체중의 변화와 건강한 일상을|함께 보는 관점 익히기", "description": "이 과정에서 웰니스는 운동, 식사, 수면과 회복을 함께 살피는 생활 관리입니다. 숫자 하나보다 내 몸의 기능과 일상의 지속 가능성을 살펴봅니다.", "steps": ["이해 · 체중 목표와 생활·체력 목표 구분하기", "점검 · 최근 운동, 식사, 수면 습관 돌아보기", "실습 · 이번 주 바꿀 작은 습관 한 가지 정하기", "확인 · 실천한 날과 어려웠던 상황 기록하기"], "note": "운동 경험과 생활 패턴에 맞춰 실천 범위를 정합니다. 건강 상태의 진단이나 치료를 위한 과정은 아닙니다."}, {"type": "LESSON 02 / 마운자로와 근력운동", "name": "KEEP YOUR STRENGTH", "slogan": "체중이 줄어드는 동안,|움직이는 힘도 살펴봐요.", "target": "체중감량 중 근력운동이|중요한 이유 이해하기", "description": "마운자로(티르제파타이드)는 GIP·GLP-1 수용체에 작용하는 약물입니다. 체중감량 과정에서는 지방과 함께 제지방도 줄 수 있습니다. 제지방은 근육만을 뜻하지 않으며, 체성분 수치와 실제 근력을 함께 살펴야 합니다.", "steps": ["이해 · 체중·지방·제지방·근력의 차이 알아보기", "학습 · 저항운동과 적절한 영양 섭취의 역할 이해하기", "실습 · 운동 가능 범위 확인 후 기본 동작과 기구 사용 익히기", "점검 · 수행 횟수, 사용 무게와 운동 후 컨디션 기록하기"], "note": "근력운동은 근육과 기능 유지에 도움이 될 수 있지만 손실 방지를 보장하지 않습니다. 운동 제한·약물 관련 증상은 처방 의료진과 확인하며, 심한 어지럼이나 구토 등으로 컨디션이 나쁘면 운동을 미루고 의료진과 상의합니다."}, {"type": "LESSON 03 / 식사와 회복", "name": "NOURISH & RECOVER", "slogan": "운동하는 몸에는,|먹고 쉬는 시간도 필요해요.", "target": "식사량이 달라져도|영양과 회복을 챙기는 방법 익히기", "description": "체중감량 중에는 식사량뿐 아니라 음식의 구성과 충분한 영양을 살핍니다. 단백질만 늘리는 것으로 근력운동을 대신할 수는 없습니다. 식사, 수분, 수면과 운동 후 회복을 함께 점검합니다.", "steps": ["이해 · 단백질을 포함한 균형 잡힌 식사의 역할 배우기", "실습 · 식단 계산기의 예시로 한 끼 구성 살펴보기", "점검 · 식사를 거르는 상황과 수분·수면 습관 돌아보기", "정리 · 일상에서 실천할 식사·회복 행동 정하기"], "note": "계산기 수치는 일반 참고값입니다. 질환이나 약물 관련 식사 문제가 있으면 의료진·영양 전문가에게 개별 상담을 받습니다. 모든 사람에게 동일한 열량·단백질 목표를 적용하지 않습니다."}, {"type": "LESSON 04 / 변화 기록과 실천 계획", "name": "TRACK YOUR NEXT CHAPTER", "slogan": "오늘의 기록으로,|다음 운동을 정해요.", "target": "체성분과 운동 수행을|함께 돌아보는 방법 익히기", "description": "체성분, 운동 수행과 생활습관 기록을 함께 살펴봅니다. 체성분 측정값은 수분 상태와 측정 조건에 영향을 받을 수 있어 한 번의 숫자로 성과를 단정하지 않습니다.", "steps": ["기록 · 운동 횟수, 수행과 컨디션을 짧게 남기기", "측정 · 가능한 비슷한 조건에서 체성분 확인하기", "비교 · 약 60일 기록과 운동 수행 변화 함께 보기", "계획 · 다음 목표와 실천 일정, 점검일 정하기"], "note": "60일은 센터의 관리 주기 예시이며 의료적 효과를 보장하는 기간이 아닙니다. 실제 점검 일정과 목표는 개인 상황에 맞춰 조정합니다."}];
const extras=[{"reassurance": "운동·식사·수면·회복을|함께 돌아보는 시간입니다.", "takeaway": "이번 주 실천할 생활습관 한 가지"}, {"reassurance": "몸무게뿐 아니라,|내가 움직이고 수행하는 능력까지.", "takeaway": "내 수준에 맞는 근력운동 실습 기록"}, {"reassurance": "무조건 덜 먹기보다,|필요한 영양과 회복을 살펴봅니다.", "takeaway": "내 식사와 회복 습관 점검표"}, {"reassurance": "잘된 점도, 어려웠던 점도|다음 계획의 단서가 됩니다.", "takeaway": "다음 60일의 목표와 실천 일정"}];
const lessonImages=[
{src:'assets/wellness-mobility.png',alt:'밝은 웰니스 공간에서 가볍게 몸을 푸는 성인의 AI 연출 이미지'},
{src:'assets/wellness-strength.png',alt:'트레이너와 기본 근력운동을 배우는 성인의 AI 연출 이미지. 특정 약물 사용자를 묘사한 사진이 아닙니다.'},
{src:'assets/wellness-recovery.png',alt:'균형 잡힌 식사와 회복을 주제로 한 AI 연출 이미지'},
{src:'assets/wellness-planning.png',alt:'트레이너와 운동 기록을 돌아보고 다음 계획을 정하는 성인의 AI 연출 이미지'}
];
function lines(id,value){const el=document.getElementById(id);el.replaceChildren();value.split('|').forEach((text,i)=>{if(i)el.append(document.createElement('br'));el.append(document.createTextNode(text));});}
document.querySelectorAll('[data-program]').forEach(button=>button.addEventListener('click',()=>{const n=Number(button.dataset.program),p=programs[n];document.querySelectorAll('[data-program]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const lessonImage=document.getElementById('lesson-image');lessonImage.src=lessonImages[n].src;lessonImage.alt=lessonImages[n].alt;lines('program-type',p.type);lines('program-name',p.name);lines('program-slogan',p.slogan);lines('program-target',p.target);lines('program-description',p.description);lines('program-note',p.note);lines('program-reassurance',extras[n].reassurance);lines('program-takeaway',extras[n].takeaway);const list=document.getElementById('program-steps');list.replaceChildren(...p.steps.map((text,i)=>{const li=document.createElement('li'),span=document.createElement('span');span.textContent=String(i+1).padStart(2,'0');li.append(span,document.createTextNode(text));return li;}));const panel=document.getElementById('program-panel');panel.classList.remove('changing');requestAnimationFrame(()=>panel.classList.add('changing'));}));
const progress=document.querySelector('.reading');let queued=false;function updateProgress(){const total=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${total>0?Math.min(100,scrollY/total*100):0}%`;queued=false;}addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(updateProgress);}},{passive:true});addEventListener('resize',updateProgress);updateProgress();

// Consultation state is intentionally ephemeral: no storage or network requests.
const goalButtons=[...document.querySelectorAll('[data-goal]')];
function updateGoals(){
 const selected=goalButtons.filter(b=>b.getAttribute('aria-pressed')==='true').map(b=>b.dataset.goal);
 document.getElementById('summary-goals').textContent=selected.length?selected.join(' · '):'상담에서 운동 목적을 함께 확인해 주세요.';
 document.getElementById('goal-response').textContent=selected.length?`${selected.join(' · ')}에 관심이 있으시군요. 지금의 운동 경험과 방문 가능한 시간도 함께 살펴볼게요.`:'선택하지 않아도 상담을 이어갈 수 있습니다.';
}
goalButtons.forEach(button=>button.addEventListener('click',()=>{button.setAttribute('aria-pressed',String(button.getAttribute('aria-pressed')!=='true'));updateGoals();}));
const paths=[...document.querySelectorAll('[name="consult-path"]')];
const nextSteps=['회원권 이용 조건을 확인한 뒤, 등록 여부와 첫 방문·측정 일정을 함께 정합니다.','회원권 조건과 PT의 별도 가격·예약 가능 시간을 확인한 뒤, 원하는 이용 범위를 정합니다.','더 궁금한 내용을 확인하고, 오늘 결정할지 충분히 살펴본 뒤 결정할지 함께 정합니다.'];
paths.forEach((input,i)=>input.addEventListener('change',()=>{if(input.checked)document.getElementById('next-step-text').textContent=nextSteps[i];}));
const reviewChecks=[...document.querySelectorAll('.review-checks input')];
function updateReview(){document.getElementById('review-status').textContent=`확인한 항목 ${reviewChecks.filter(c=>c.checked).length}개 · 체크는 등록이나 결제를 진행하지 않습니다.`;}
reviewChecks.forEach(input=>input.addEventListener('change',updateReview));
document.getElementById('reset-consult').addEventListener('click',()=>{
 goalButtons.forEach(b=>b.setAttribute('aria-pressed','false'));paths.forEach(i=>i.checked=false);reviewChecks.forEach(i=>i.checked=false);updateGoals();updateReview();
 document.getElementById('next-step-text').textContent='이용 방법을 선택하면 다음 상담 순서를 볼 수 있습니다.';
 document.querySelectorAll('details').forEach(d=>d.open=false);
 document.querySelector('[data-program="0"]').click();
 goalButtons[0].focus({preventScroll:true});document.getElementById('start').scrollIntoView({behavior:'auto'});
});

const White_Key=['z','x','c','v','b','n','m'];
const Black_Key=['s','d','g','h','j'];
const keys=document.querySelectorAll('.key');
const white=document.querySelectorAll('.key.white');
const black=document.querySelectorAll('.key.black');

keys.forEach(key=>{
    key.addEventListener('click', () => playNote(key));
});
document.addEventListener('keydown',e=>{
    if(e.repeat)return;
    const key=e.key;
    const white_index=White_Key.indexOf(key);
    const black_index=Black_Key.indexOf(key);
    if(white_index>-1)playNote(white[white_index]);
    if(black_index>-1)playNote(black[black_index]);
})
function playNote(key){
const noteaudio=document.getElementById(key.dataset.note);
noteaudio.currentTime=0;
noteaudio.play();
key.classList.add('active');
noteaudio.addEventListener('ended',()=>{
    key.classList.remove('active');
});

}
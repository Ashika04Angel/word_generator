const words = [
    {
        verse: "The LORD will do wonders among you. ",
        chapter: "Joshua 3:5"
    },
    {
        verse: "I will not leave you as orphans; I will come to you. ",
        chapter: "John 14:18"
    },
    {
        verse: "For you are a people holy to the Lord your God. The Lord your God has chosen you out of all the peoples on the face of the earth to be his people, his treasured possession. ",
        chapter: "Deut 7:6"
    },
    {
        verse: "He who is of a proud heart stirs up strife, But he who trusts in the LORD will be prospered. ",
        chapter: "Proverb 28:25"
    },
    {
        verse: "God is not a man, that he should lie, neither the son of man, that he should repent: hath he said, and shall he not do it? or hath he spoken, and shall he not make it good? ",
        chapter: "Numbers 23:19"
    },
    {
        verse: "Though thy beginning was small, yet thy latter end shall greatly increase. ",
        chapter: "Job 8:7"
    },
    {
        verse: " He is wise in heart and mighty in strength; who has hardened himself against him and prospered?",
        chapter: "Job 9:4"
    },
    {
        verse: "For his anger is but for a moment, his favor is for a lifetime. Weeping may endure for a night, but joy comes in the morning. ",
        chapter: "Psalm 30:5"
    },
    {
        verse: "He performs wonders that cannot be fathomed, miracles that cannot be counted.  ",
        chapter: "Job 9:10"
    },
    {
        verse: "The LORD will have compassion on his dwellings",
        chapter: "Jeremiah 30:18 "
    },
    {
        verse: "For the Lord GOD will help me; therefore I will not be disgraced; ",
        chapter: "Isaiah 50:7"
    },
    {
        verse: "Thou crownest the year with thy goodness",
        chapter: "Psalm 65:11"
    },
    {
        verse: "The LORD shall be thine everlasting light",
        chapter: "Isaiah 60:20"
    },
    {
        verse: "For I known the thoughts that I think towards you that I think towards you",
        chapter: "Jeremiah 29:11"
    },
    
]
console.log(words[1]);

// set
const word_1 = document.querySelector('.word-container');
console.log(word_1);
//2
const in_1 = document.querySelector(".word");
// 3
const vers = document.querySelector(".verse");
// 4
const chap = document.querySelector(".chapter")
// 5
const gen_but = document.querySelector(".generate_btn");
// 6
const favor = document.querySelector(".fav_btn");
// 7
const list = document.querySelector(".fav_list");
// 8
const clear = document.querySelector(".clear_fav_btn");
// 9
const remove = document.querySelector(".fav_remove")
// 10
const mic = document.querySelector(".prounce")
// 11
const savedFav = JSON.parse(localStorage.getItem('favorites')) || [];

renderFavorites()

gen_but.addEventListener('click',()=>{
    const randomIndex = Math.floor(Math.random()* words.length)
    const randomWord = words[randomIndex];
    // console.log(randomWord);
    displayWord(randomWord);
})

// function to display in UI

function displayWord(Element){
    in_1.textContent = Element.verse;
    chap.innerHTML = `<strong>Chapter</strong> ${Element.chapter}`; 
}
//prounce button

mic.addEventListener('click',() =>{
    const verses = in_1.textContent;
    //web API
    const utterance = new SpeechSynthesisUtterance(verses);
    utterance.lang ="en-us";
    speechSynthesis.speak(utterance);
})
//favbutton

favor.addEventListener('click',()=>{
    const verses = in_1.textContent;
    if(!savedFav.includes
        (verses)
    ){
        savedFav.push(verses)
        localStorage.setItem('Favorites',
            JSON.stringify(savedFav)
        )
        renderFavorites();
    }
})
//fav button

function renderFavorites(){
    list.innerHTML = '';
    savedFav.forEach((words)=>{
        const li = document.createElement('li');
        li.innerHTML = `${words} <button 
        class="favorite-remove"><i
        class="fa-solid fa-close
        close--icon"></i></button>`

        list.appendChild(li)
    })
}

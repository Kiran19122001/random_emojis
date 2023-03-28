const btn = document.getElementById("btn")
const emojiName=document.getElementById("name")

btn.addEventListener('click', async() => {
    const response = await fetch('https://emoji-api.com/emojis?access_key=a191d23c070b858e26beae8c421d167defe2eee0')
    const result = await response.json()
    console.log(result);
    let emoji = []
    for (let i = 0; i < 2000; i++){
        emoji.push({
            char:result[i].character,
            name:result[i].unicodeName
        })
    }
    let num = Math.floor((Math.random() * emoji.length))
    btn.innerText = emoji[num].char
    emojiName.innerText=emoji[num].name
    
})
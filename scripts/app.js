let $ = document;
let greetingText = $.querySelector('.greeting');

let typewriter = new Typewriter(greetingText, {
    loop: true
});

let userName = 'حسین'

typewriter.typeString(`${userName} عزیز به وبسایت مدرسه شهدای مدافع امنیت خوش آمدی `)
    .pauseFor(2500)
    .deleteAll()
    .start();


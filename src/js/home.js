function createHomeLayout() {
  const container = UI.createElement(
    'div',
    {
      class: 'container-root',
    },
    [
      UI.createElement("header", { class: "header" }, [UI.createElement("a", { href: "./index.html" }, "Log In"),
                                             UI.createElement("a", { href: "./registration.html" }, "Sign In")]),
      UI.createElement('main', { class: 'main-section'}, [
        UI.createElement('nav', { class: 'sidebar overflow-auto' },[
          UI.createElement('div',{class:'card'}, UI.createElement('div',{class:'card-body'},[
            UI.createElement('img', {class:'avatar', src:"https://www.w3schools.com/howto/img_avatar2.png"},''),
            UI.createElement('h5', {class:'card-title'},'Alice Johnson'),
          ] )),
          UI.createElement('div',{class:'card'}, UI.createElement('div',{class:'card-body'},[
            UI.createElement('img',{class:'avatar',src:"https://www.w3schools.com/w3images/avatar2.png"},''),
            UI.createElement('h5',{class:'card-title'},'Bob Smith'),
          ] )),
          UI.createElement('div',{class:'card'}, UI.createElement('div',{class:'card-body'},[
            UI.createElement('img',{class:'avatar',src:"https://www.w3schools.com/w3images/avatar6.png"},''),
            UI.createElement('h5',{class:'card-title'},'Monica Brown'),
          ] )),
        ]),
        UI.createElement('div', { class: 'section  overflow-auto' }, [
           UI.createElement('section', { class: 'box overflow-hidden' },[
            UI.createElement('div', { class: 'title' }, [
              UI.createElement('h5',{},'Lewis Carroll'), UI.createElement('h5',{},'The Adventures of Alice in Wonderland')
            ]),
            UI.createElement('div', { class: 'card' }, UI.createElement('div', {class:'card-body'}, [
              UI.createElement('p', {class: 'story'},'Alice was beginning to get very tired of sitting by her sister on the bank and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations.'),
              UI.createElement('img',{src:"https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/84f9dc39-0868-4cec-aeaa-2356387f37ce/Alice%E2%80%99s%20Adventures%20in%20Wonderland%20-%20Header.png" },'')
            ])),
           ]),
           UI.createElement('section', { class: 'box overflow-hidden' },[ 
            UI.createElement('div', { class: 'title' },[
              UI.createElement('h5',{},'J.R.R. Tolkien'), UI.createElement('h5',{},'The Lord of the Rings: The Fellowship of the Ring')
            ]),
            UI.createElement('div', { class: 'card' },UI.createElement('div', {class:'card-body'}, [
              UI.createElement('p', {class: 'story'},'One ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them, in the Land of Mordor where the Shadows lie.'),
              UI.createElement('img',{src:"https://img.hulu.com/user/v3/artwork/3c4e0a9f-c6f2-44f4-a703-a18c6be2a937?base_image_bucket_name=image_manager&base_image=243fcf14-8e45-4441-96a8-be510660958a&size=600x338&format=webp"},'')
            ])),
          ]),
          UI.createElement('section', { class: 'box overflow-hidden' },[
           UI.createElement('div', { class: 'title' }, [
           UI.createElement('h5',{},'Jane Austen'), UI.createElement('h5',{},'Pride and Prejudice')
          ]),
          UI.createElement('div', { class: 'card' },UI.createElement('div', {class:'card-body'}, [
          UI.createElement('p', {class: 'story'},'It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.'),
           UI.createElement('img',{src:"https://wellsvillesun.com/wp-content/uploads/2024/01/pride-and-prejudice-book-summary.jpg.webp"},'')
          ])),]),]),
        UI.createElement('footer', { class: 'footer' },'') 
      ]),]);
      
     UI.render(container, document.body);
};

createHomeLayout(UI);
 
  
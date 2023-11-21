
class Post {
    constructor(name, text) {
        this.name = name;
        this.content = {text, id: generateUniqueId()};
    }

}


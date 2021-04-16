function listProcessor(array) {
    const obj = {
        list: [],
        add(str) {
            this.list.push(str);
        }, 
        remove(str) {
            let i = this.list.indexOf(str);

            while (i > -1) {
                this.list.splice(i, 1)
                i = this.list.indexOf(str);
            }
        }, 
        print() {
            console.log(this.list.join(','));            
        }, 
    };

    for (const el of array) {
        const [command, text] = el.split(' ');
        obj[command](text);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
class Artist {

    constructor(name, curr) {
        this.list = [];
        this.name = name;
        this.curr = curr;
    }

    intro() {
        console.log(`Hi, my name is ${this.name} and I am a musician!`);
    }
    songPrice(price) {
        console.log(`${this.name}'s price per song is ${(price / 100).toFixed(2)} ${this.curr}`);

    }
    addSong(song) {
        this.list.push(song);
        //console.log(song);       //this one
        //console.log(this.list);
    }
    playlist() {
        console.log(`${this.name}'s playlist:`);
        console.log('========================');
        let songNum = 0;
        for (let i = 0; i < this.list.length; i++) {
            const song = this.list[i];
            songNum++;
            console.log(`${songNum}. ${song} (0) `);
        }
        console.log('---------------------');
    }
    playSong(index) {
        //console.log(index);

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].index !== index) {
                console.log(`Playing song: ${this.list[index]} (${index})`);
                break;                  // radau ir baigiu
            }
        }

    }


}




module.exports = Artist;
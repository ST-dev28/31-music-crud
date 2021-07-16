class Artist {

    constructor(name, curr) {
        this.list = [];
        this.name = name;
        this.curr = curr;
        this.profit = 0;
        this.songs = [];
        this.pricePerSong = 0;
    }

    intro() {
        console.log(`Hi, my name is ${this.name} and I am a musician!`);
    }

    songPrice(price) {
        this.pricePerSong = price;
        console.log(`${this.name}'s price per song is ${(this.pricePerSong / 100).toFixed(2)} ${this.curr};`);
        console.log('---------------------');
    }

    addSong(song) {
        this.list.push({ song, count: 0 });
        console.log(song);
        //console.log(this.list);
    }

    playlist() {
        console.log('---------------------');
        console.log(`${this.name}'s playlist:`);
        console.log('========================');
        for (let i = 0; i < this.list.length; i++) {
            const song = this.list[i];
            console.log(`${i + 1}. ${song.song} (${song.count}) `);
        }
        console.log('---------------------');
    }

    playSong(index) {
        //console.log(index);
        if (this.list[index]) {
            this.list[index].count += 1;
            this.profit += this.pricePerSong;
            console.log(`Playing song: ${this.list[index].song}.`);
        }
    }

    fortune() {
        console.log('--------------------');
        console.log(`Total lifetime wealth of ${this.name} is ${this.profit / 100} ${this.curr} right now!`);
    }
}




module.exports = Artist;
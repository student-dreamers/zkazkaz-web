export class Test {
    constructor(partial) {
       this.image_name = partial.image_name;
       this.user_id = partial.user_id;
       if (partial.date_time){
           this.date = new Date(partial.date_time.replace(/(\..*|\+.*)/, ""));
       } else {
           this.date = new Date();
       }

    }
}
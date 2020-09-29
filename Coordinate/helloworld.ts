let helloWorld = "Hello World";


// interface Pod {
// pod: number;
// }

class Pod {
  pod: number;

  constructor(pod: number) {
    this.pod = pod;
  }

  toString(): string {
    return `Pod[${this.pod}]`;
  }

  //plus1(): number {
  //return this.pod + 1;
  //}

};
  


const pod:  Pod = {pod:1};
const pod2: Pod = new Pod(2);

//console.log(pod2);
console.log(`${pod} ${pod2}`);

console.log(pod2 + "");
console.log('pod:', pod.toString());

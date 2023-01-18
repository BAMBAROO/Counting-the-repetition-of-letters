const data = "asdfawufaskjgirmlvfsdfnnurqpdhf";
let data2 = [];
let data3;
let exist;

const data4 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

for (let i = 0; i < data4.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data4[i] === data[j]){
      hasil(data[j]);
    }
  };
  if (i === data4.length - 1) {
    console.log(data2);
  }
};

function hasil(data) {
  if (exist === data){
    let index = data2.length - 1;
    data2[index][1] += 1;
  } else {
    data3 = [data,1];
    data2.push(data3);
    exist = data3[0];
  }
};



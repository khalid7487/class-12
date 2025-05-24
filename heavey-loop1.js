function test() {
  console.log("gest");

  let i = 0;
  while (i < 1000000000) {
    i++;
  }

  console.log(i);

  let j = 0;
  while (j < 1000000000) {
    j++;
  }

}

test();
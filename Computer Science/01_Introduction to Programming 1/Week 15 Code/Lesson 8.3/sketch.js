var numArray = [81,29,74,99,2,82,55,92,61,67,88,67,18,13,21,52,19,94,32,24,28,59,33,71,41,95,91,50,99,23,21,46,81,4,78,46,93,38,22,75,67,6,19,74,67,59,70,36,57,47,48,97,48,28,90,15,50,74,49,93,37,73,52,76,75,96,71,58,69,90,58,52,34,88,85,1,91,87,70,95,50,32,39,39,49,5,36,10,70,4,77,40,18,46,46,72,91,52,99,82,78,33,21,73,6,25,86,82,92,17,99,31,15,77,44,14,60,63,45,96,35,24,12,81,11,55,7,90,73,47,35,25,19,56,12,5,68,40,2,66,58,92,19,72,72,81,89,69,41,99,45,86,80,51,36,15,34,88,67,62,82,39,96,89,26,98,89,32,55,81,12,22,15,34,87,67,99,29,24,32,9,32,67,11,13,45,1,46,78,13,17,48,90,97,47,63,93,63,38,81,80,67,80,69,38,87,46,80,73,63,70,86,25,54,86,90,68,100,50,21,91,53,16,98,45,65,57,31,70,20,21,46,94,78,87,58,65,8,3,54,46,41,88,80,53,50,40,73,54,15,62,17,93,6,50,67,97,19,40,15,16,28,1,56,18,42,32,18,84,3,4,93,42,9,67,24,11,91,26,8,89,43,52,93,65,48,71,44,16,69,61,2,56,18,95,23,1,40,42,66,50,5,46,63,80,46,3,18,17,60,91,43,96,53,16,4,34,81,98,35,37,63,89,60,69,54,12,54,45,7,67,36,45,17,54,58,97,30,2,21,47,9,98,32,11,34,83,87,47,85,37,98,42,50,42,71,98,87,76,58,78,57,71,6,94,64,67,65,31,9,78,20,13,51,44,70,94,85,74,85,10,69,1,41,46,22,30,67,70,89,97,40,91,40,32,61,75,39,66,79,98,25,95,12,27,40,41,75,94,75,81,34,93,65,9,73,90,38,80,27,11,92,89,40,8,10,91,54,73,49,88,79,41,46,79,48,11,48,92,65,24,51,65,78,18,79,48,18,16,78,3,87,44,29,16,41,18,38,81,47,58,43,51,10,81,36,79,29,65,30,60,6,74,33,97,55,78,11,55,93,15,38,45,49,88,40,82,59,76,15,1,94,57,50,50,63,55,76,85,7,14,53,65,33,78,79,43,55,34,27,37,11,94,52,11,32,23,49,31,57,20,22,33,56,2,30,78,84,99,22,93,78,64,2,39,92,32,12,57,36,37,71,88,36,37,72,40,4,69,85,38,54,68,19,29,12,54,83,32,100,87,14,71,51,38,27,8,49,22,38,81,86,49,20,73,4,34,47,41,17,5,6,13,26,46,95,26,80,59,26,83,57,12,42,92,1,31,47,27,33,24,90,17,56,9,61,77,90,22,68,26,18,86,81,72,51,15,93,13,41,35,2,73,15,50,79,50,7,39,26,95,94,48,46,88,82,75,7,98,68,52,85,88,94,70,60,0,90,84,57,42,37,56,91,5,0,45,86,11,57,19,21,48,45,76,48,46,47,33,69,63,61,41,71,62,81,63,66,61,97,29,20,64,5,67,52,15,20,37,33,3,31,26,39,83,68,11,54,13,86,61,94,4,67,19,4,2,64,59,35,50,18,97,64,93,69,53,75,74,37,38,93,85,43,14,14,93,68,35,63,55,80,62,74,39,19,19,65,55,18,1,78,10,13,74,78,40,97,36,46,53,98,59,64,28,30,34,66,58,93,51,64,65,77,46,13,12,79,20,14,76,22,38,98,96,64,19,59,97,86,50,11,84,4,70,62,81,48,42,57,3,3,77,96,28,15,64,56,49,83,82,25,13,57,85,69,62,51,89,23,91,90,92,89,97,23,70,83,76,2,62,13,76,46,9,75,87,40,100,37,46,82,32,20,19,100,31,87,87,10,32,24,26,51,89,50,60,67,12,98,9,25,12,20,92,7,15,65,43,1,14,90,92,64,22,68,31,68,82,40,36,61,84,39,93,34,69,73,52,84,46,53,89,10,31,5,6,66,60,65,75,68,64,27,37,39,75,65,88,68,98,9,56,54,53,65,46,63,5,57,15,48,4,39,4,61,60,72,23,58,65,14,75,92,14,86,64,27,91,66,31,66,54,24,4,34,47,89,65,93,97,3,0,50,3,83,78,81,93,37,15,72,92,68,66,20,11,66,19,78,93,28,52,4,87,72,36,52,25,76,98,94,68,51,37,82,95,62,82,69,93,67,39,88,35,22,28,51,80,99,12,33,68,42,37,11,85,23,37,54];

function setup()
{
   //find the first number 42
   let meaningOfLife = 0
   for(let i =0; i < numArray.length; i++) {
      if (numArray[i] == 42) {
         console.log(`Found the meaning at index ${i}`);
         meaningOfLife = i;
         break;
      }
   }

   console.log(`The meaning of life is at index ${meaningOfLife}`);
}

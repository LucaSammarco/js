// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
  str = Array.from(str);
  str = str.reverse()
  str = str.join("")
  return str
}
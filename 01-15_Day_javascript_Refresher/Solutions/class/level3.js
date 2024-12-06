// const { dataflow } = require("googleapis/build/src/apis/dataflow");

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

class statistics {
constructor(data){
  this.data = data;
}
mean(data){
  return data.reduce((acc, curr) => acc + curr, 0) / data.length;
}
median(data){
   const mid = Math.floor(data.length / 2);
  if (data.length % 2 === 0) {
    return (data[mid - 1] + data[mid]) / 2;
  } else {
    return data[mid];
  }
}
mode(data){
  const counts = data.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}
range(data){
  return Math.max(...data) - Math.min(...data);
}
min(data){
  return Math.min(...data)
  
}
max(data){
  return Math.max(...data)
}
var(data){
  const mean = this.means(data);
  return data.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0) / data.length;

}
std(data) {
  return Math.sqrt(this.variance(data));
}
freqDist(data){
  const frequency = {};
  data.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  return frequency;
}

}
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
console.log('Count:', statistics.count()); 
console.log('Sum:', statistics.sum()); 
console.log('Min:', statistics.min()); 
console.log('Max:', statistics.max()); 
console.log('Range:', statistics.range()); 
console.log('Mean:', statistics.mean()); 
console.log('Median:', statistics.median()); 
console.log('Mode:', statistics.mode());
console.log('Variance:', statistics.variance()); 
console.log('Standard Deviation:', statistics.std());
console.log('Frequency Distribution:', statistics.freqDist());
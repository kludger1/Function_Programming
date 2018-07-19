const students = [
    {name: "Julio Alfaro", grade:100},
    {name: "Katleen Ludger", grade:90},
    {name: "Steven Galvez", grade:45}
]

class Exercise{
    constructor(students){
        this.students = students
        this.extraCredit = this.giveExtraCredit()
        this.passers = this.getPassers()
        this.average = this.getAverage()
    }
    giveExtraCredit(){
      return this.students.map(stu=>{ return stu.grade + 15})
    }
    getPassers(){
     return this.students.filter(stu=>{ return stu.grade > 59})
    }
    getAverage(){
        return this.extraCredit.reduce((acc, curr, i)=>{
            if(i === this.extraCredit.length-1)return((acc + curr)/(i+1)).toFixed(2)
            return acc + curr
        })

    }

}
const exercise = new Exercise(students)
console.log(exercise.average)
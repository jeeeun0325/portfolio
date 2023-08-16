function Person(name,age){
    this.name=name;
    this.age=age;}
    
   Person.prototype.introduce=function(){
        console.log('안녕하세요~ 저는'+ this.name+'이고 나이는'+this.age+'살 입니다')
    }


const person1=new Person('지민',27)
const person2=new Person('RM',29)

person1.introduce()
person2.introduce()
// String constructor uchun custom metodlar
String.prototype.trm = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
  
  String.prototype.upperCase = function() {
    let result = '';
    for (let i = 0; i < this.length; i++) {
      const charCode = this.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(charCode - 32);
      } else {
        result += this.charAt(i);
      }
    }
    return result;
  };
  
  String.prototype.has = function(substr) {
    return this.indexOf(substr) !== -1;
  };
  
  String.prototype.cut = function(start, end) {
    let result = '';
    if (start < 0) start = this.length + start;
    if (end === undefined) end = this.length;
    if (end < 0) end = this.length + end;
  
    for (let i = start; i < end; i++) {
      result += this.charAt(i);
    }
    return result;
  };
  
  String.prototype.rpt = function(count) {
    let result = '';
    for (let i = 0; i < count; i++) {
      result += this;
    }
    return result;
  };
  
  // Number constructor uchun custom metodlar
  Number.prototype.fixed = function(digits) {
    const numStr = this.toString();
    const parts = numStr.split('.');
    if (parts.length === 1) return numStr + '.' + '0'.repeat(digits);
    return parts[0] + '.' + parts[1].substring(0, digits);
  };
  
  Number.prototype.round = function() {
    if (this % 1 === 0) return this;
    const integerPart = Math.floor(this);
    const decimalPart = this - integerPart;
    if (decimalPart >= 0.5) return integerPart + 1;
    return integerPart;
  };
  
  Number.prototype.isSquare = function() {
    if (this < 0) return false;
    const sqrt = Math.sqrt(this);
    return Math.floor(sqrt) === sqrt;
  };
  
  Number.prototype.count = function() {
    return Math.abs(this).toString().length;
  };
  
  Number.prototype.sum = function() {
    const absNumStr = Math.abs(this).toString();
    let sum = 0;
    for (let i = 0; i < absNumStr.length; i++) {
      sum += parseInt(absNumStr.charAt(i));
    }
    return sum;
  };
  
  // Array constructor uchun custom metodlar
  Array.prototype.customMap = function(callback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, this));
    }
    return newArr;
  };
  
  Array.prototype.customEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
  
  Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
  
  Array.prototype.customFindIndex = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
            return i;
            }
        }
        return -1;
    };
        
  Array.prototype.customSplice = function(start, deleteCount, ...items) {
    const removed = [];
    const arrLength = this.length;
    let startIndex = start < 0 ? Math.max(start + arrLength, 0) : Math.min(start, arrLength);
    let count = deleteCount !== undefined ? Math.min(deleteCount, arrLength - startIndex) : arrLength - startIndex;
    let endIndex = startIndex + count;

    for (let i = startIndex; i < endIndex; i++) {
        removed.push(this[i]);
    }

    const tail = [];
        for (let i = endIndex; i < arrLength; i++) {
            tail.push(this[i]);
        }

    const newLength = items.length + arrLength - count;
    this.length = newLength;

    let newIndex = startIndex;
        for (let i = 0; i < items.length; i++) {
            this[newIndex] = items[i];
            newIndex++;
        }

        for (let i = 0; i < tail.length; i++) {
            this[newIndex] = tail[i];
            newIndex++;
        }

    return removed;
    };




    // Constructors:
    // Animal
    function Animal(name, speed, limitAge) {
        this.name = name;
        this.speed = speed;
        this.limitAge = limitAge;
      }
      
      Animal.prototype.info = function() {
        return `Name: ${this.name}, Speed: ${this.speed}, Limit Age: ${this.limitAge}`;
      };


    // Student
    function Student(name, course, years, university) {
        this.name = name;
        this.course = course;
        this.years = years;
        this.university = university;
      }
      
      Student.prototype.leftYears = function() {
        return this.years;
      };

    // Person
    function Person(name, age, currentYear) {
        this.name = name;
        this.age = age;
        this.currentYear = currentYear;
      }
      
      Person.prototype.getBirthYear = function() {
        return this.currentYear - this.age;
      };

      
    // Employee
    function Employee(name, salary, workName) {
        this.name = name;
        this.salary = salary;
        this.workName = workName;
      }
      
      Employee.prototype.increaseSalary = function(percent) {
        const increaseAmount = (this.salary * percent) / 100;
        return this.salary + increaseAmount;
      };

      
    // Rectangle
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
      }
      
      Rectangle.prototype.getArea = function() {
        return this.width * this.height;
      };
      
      Rectangle.prototype.getPerimeter = function() {
        return 2 * (this.width + this.height);
      };
      

      

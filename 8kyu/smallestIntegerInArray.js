//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest = args[0]
      
        args.forEach(i => (i < smallest) && (smallest = i))
    
        return smallest 
        
    }
  }
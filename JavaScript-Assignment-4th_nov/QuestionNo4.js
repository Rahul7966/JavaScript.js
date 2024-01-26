//Q4. Discuss the precedence and associativity of operators in JavaScript. Why is understanding these
//concepts important?

/*Precedence refers to the order in which operators are evaluated when multiple operators are present
in an expression. Operators with higher precedence are executed first. For example, in the expression 3 + 5 * 2,
multiplication (*) has higher precedence than addition (+), so the multiplication is performed first/** */

const result = 3 + 5 * 2;
console.log(result)
 // The result will be 13, not 16 (if addition had
//higher precedence)

/*Associativity refers to the order in which operators of the same precedence are evaluated. Some operators
associate left to right, meaning they are evaluated from left to right. Others associate right to left, meaning they
are evaluated from right to left./** */

const result = 10 + 5 + 2;
console.log(result)
// The result will be 17 (evaluated as (10 + 5) + 2)
/*
Understanding precedence and associativity is important for severa2 reasonsa
± Understanding the order of precedence ensures that expressions are
evaluated correctly, preventing potential errors or unexpected results
± When working with complex expressions, knowing the precedence and associativity
allows developers to write code that behaves as intended, making it easier to reason about and maintain
± In case of unexpected results, knowing operator precedence and
associativity helps in debugging and identifying the root cause of issues
± Knowledge of precedence and associativity can be used to optimize code by avoiding
unnecessary parentheses and ensuring efficient computation.
/** */







function generateAssignment() {
    const rollNumber = document.getElementById('rollNumber').value;

    if (!rollNumber || isNaN(rollNumber)) {
        alert('Please enter a valid roll number.');
        return;
    }

    const rollNo = parseInt(rollNumber);

    let assignment;

    if (rollNo >= 1 && rollNo <= 50) {
        // Determine the assignment based on the roll number range and parity
        if (rollNo >= 1 && rollNo <= 10) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
            Problem Statement: Armstrong Number Manipulation

                Write a Python script that takes a starting and ending number from the user and identifies Armstrong numbers within that range. 
                For Armstrong numbers less than 300, print them as they are. 
                For Armstrong numbers greater than or equal to 300, reverse each number and display both the original and reversed numbers side by side.
                
                Example:
                    Enter the starting range: 100
                    Enter the ending range: 2000
                    Original and reversed Armstrong numbers within the range 100 to 2000:
                    153
                    370 -> 073
                    371 -> 173
                    407 -> 704
                    1634 -> 4361

                PERFOMR THE ABOVE BY USING FUNCTION AND LISTS CONCEPT.
                </pre>
                ` :
                `<pre>
                Problem Statement: Word Frequency Counter with Case-Insensitivity

                Write a Python program that counts the occurrences of each word in a given string.
                Use a dictionary to store the word frequencies.
                Consider case-insensitivity when identifying unique words; that is, treat uppercase and lowercase letters as equivalent.
                
                Explanation:
                
                When counting word frequencies, ensure that the program does not differentiate between uppercase and lowercase letters. 
                
                For example, the words "Apple" and "apple" should be considered the same word and contribute to the frequency count of a single entry.
                
                Example:

                    Enter a string: This is a sample string. This string contains some words. Some words may repeat.

                    Word frequencies:
                    this: 2
                    is: 1
                    a: 1
                    sample: 1
                    string: 2
                    contains: 1
                    some: 2
                    words: 2
                    may: 1
                    repeat: 1

                PERFORM IT BY USING THE FUNCTION CONCEPT.
                </pre>
                `;
        } else if (rollNo >= 11 && rollNo <= 20) {
            assignment = rollNo % 2 === 1 ?
                `<pre>Problem Statement: Strong Number Prediction

                A strong number (also known as a digital factorial) is a number such that the sum of its individual digits, each factorialized, is equal to the original number.
                
                For example, 145 is a strong number because:
                
                1!+4!+5!=1+24+120=145 #output should be in this format
                
                Write a function in Python that predicts whether a given number is a strong number or not. 
                The function should take a user-entered number as input and return the output as per the above example format.</pre>` :
                `<pre>Problem Statement: Leap Year Reversal

                Write a Python script to find and display leap years within a specified range provided by the user. 
                For each leap year found in the range, reverse the year and display both the original and reversed forms on the screen.
                
                Example :- 
                Enter the starting year: 2000
                Enter the ending year: 2025
                Leap years and their reversed forms:
                2000 -> 0002
                2004 -> 4002
                2008 -> 8002
                2012 -> 2102
                2016 -> 6102
                2020 -> 0202
                2024 -> 4202

                WRITE THE SOLUTION OF THE ABOVE BY USING LISTS AND FUNCTIONS CONCEPT.
                </pre>` ;
        } else if (rollNo >= 21 && rollNo <= 30) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Fibonacci Series Analysis

                You are tasked with analyzing the Fibonacci series up to a specified number of terms. 
                The goal is to determine and display information about each term in the series based on the following criteria:
                
                If the term is even, display: "It's even."
                If the term is odd, display: "It's odd."
                If the term is both odd and prime, display: "It's both odd and prime."
                
                Write a Python program that takes input for the number of terms in the Fibonacci series and outputs the analyzed information for each term in a readable format. 
                The program should include a function to determine whether a given number is prime.
                
                Consider the first two terms in the Fibonacci series as 0 and 1. 
                Use a loop to generate the remaining terms and analyze each one based on the specified criteria.

                PERFORM IT BY USING A FUNCTION.
                
                Example - 
                Enter the number of terms in the Fibonacci series: 8
                
                Fibonacci series with 8 terms:
                0 - It's even.
                1 - It's odd.
                1 - It's odd.
                2 - It's even.
                3 - It's odd and prime.
                5 - It's odd and prime.
                8 - It's even.
                13 - It's odd and prime.
                    </pre>`:
                `<pre>
            Problem Statement: Pangram Checker

                You are tasked with creating a Python function to determine whether a given string is a pangram. 
                A pangram is a sentence that contains every letter of the alphabet at least once.
                
                Write a Python function named "is_pangram" that takes a string as input and returns True if it is a pangram, and False otherwise.
                
                Your function should be case-insensitive, meaning that it should consider both uppercase and lowercase letters when checking for the presence of each letter of the alphabet.
                
                Example:
                def is_pangram(sentence):
                    # Your implementation here

                # Test cases
                print(is_pangram("The quick brown fox jumps over the lazy dog"))  # Output: True
                print(is_pangram("Hello, world!"))  # Output: False
                print(is_pangram("Pack my box with five dozen liquor jugs"))  # Output: True
                print(is_pangram("A quick brown fox"))  # Output: False
                </pre>`;
        } else if (rollNo >= 31 && rollNo <= 40) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
            Problem Statement: Number Calculation with Digit Manipulation

                Write a Python program that takes a starting and ending number from the user and identifies even and odd numbers 
                within that range. Apply the following rules:
                
                For even double-digit numbers, calculate the sum of squares of the digits using a function.
                For odd double-digit numbers, calculate the sum of cubes of the digits using a function.
                For single-digit numbers, print the number as it is.

                Example:
                Enter the starting range: 10
                Enter the ending range: 20
                Numbers and their respective calculations within the range 10 to 20:
                10 - 1
                11 - 2
                12 - 5
                13 - 28
                14 - 17
                15 - 126
                16 - 37
                17 - 344
                18 - 65
                19 - 730
                20 - 4                
                </pre>` :
                `<pre>Problem Statement: Palindrome Operations

                Write a Python program that performs specific operations on palindrome numbers within a given range. 
                The program should follow these rules:
                
                Define a function square_root to calculate the square root of a number.
                Define a function power to calculate the power of a number.
                Define a function is_palindrome to check if a number is a palindrome.
                Take user input for the starting and ending range (inclusive).
                Display the operations on palindrome numbers within the specified range:
                If the palindrome number is even, perform the square root operation on it.
                If the palindrome number is odd, perform the power operation on it.

                Example:
                    Enter the starting range: 100
                    Enter the ending range: 250
                    Operations on palindrome numbers within the range 100 to 250:

                    101 - Power of 2: 10201
                    111 - Power of 2: 12321
                    121 - Power of 2: 14641
                    131 - Power of 2: 17161
                    141 - Power of 2: 19881
                    151 - Power of 2: 22801
                    161 - Power of 2: 25921
                    171 - Power of 2: 29241
                    181 - Power of 2: 32761
                    191 - Power of 2: 36481
                    202 - Square Root: 14.212670
                    212 - Square Root: 14.560219
                    222 - Square Root: 14.899664
                    232 - Square Root: 15.231546
                    242 - Square Root: 15.556349
                </pre>`;
        } else if (rollNo >= 41 && rollNo <= 50) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
            Problem Statement: Finding Common Even and Odd Elements

                Write a Python program that takes input from the user for two lists and finds the common even and odd elements 
                between them. The program should follow these steps:

                Define a function "find_common_even_odd_elements" that takes two lists as parameters.
                Inside the function, use sets and list comprehensions to find and return two lists:

                    - List containing the common even elements.
                    - List containing the common odd elements.
                
                Take input from the user for the elements of the first and second lists.
                Call the find_common_even_odd_elements function with the user-input lists.
                Display the common even and odd elements between the two lists.
                
                Example:
                    Enter elements of the first list separated by spaces: 1 2 3 4 5 6
                    Enter elements of the second list separated by spaces: 3 4 5 6 7 8
                    Common even elements: [4, 6]
                    Common odd elements: [3, 5]
                </pre>` :
                `<pre>
                Problem Statement: Student Grades Management with List Comprehension

                    You are tasked with developing a Python program to manage the grades of students in a class. 
                    The program should perform the following tasks:

                    Define a function "calculate_average" that takes a list of grades as input and returns the average grade.

                    Define a function "highest_grade_student" that takes a dictionary of student names and their corresponding grades and 
                    returns the name of the student with the highest grade.

                    Take input from the user for the number of students.

                    For each student, take input for their name and grades.
                    Store the information in a dictionary where the keys are student names, and values are lists of their grades.

                    Calculate and display the average grade for each student.

                    Identify and display the student with the highest grade.

                    IMPLEMENT LIST COMPREHENSION WHEREEVER YOU CAN!

                    Example:
                        Enter the number of students: 3

                        Enter the name of student 1: Alice
                        Enter the grades of Alice separated by spaces: 85 90 88
                        
                        Enter the name of student 2: Bob
                        Enter the grades of Bob separated by spaces: 78 92 89
                        
                        Enter the name of student 3: Charlie
                        Enter the grades of Charlie separated by spaces: 92 95 91
                        
                        Average grades for each student:
                        Alice: 87.67
                        Bob: 86.33
                        Charlie: 92.67
                        
                        Student with the highest grade: Charlie  
                </pre>
                `;
        }

        const assignmentContainer = document.getElementById('assignmentContainer');
        assignmentContainer.innerHTML = `<p>${assignment}</p>`;
    } else {
        alert('Please enter a valid roll number between 1 and 50.');
    }
}

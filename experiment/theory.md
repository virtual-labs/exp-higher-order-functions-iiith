In this experiment we are going to learn about high order functions in python, using Ashish’s real world scenario 


|<p>1.</p><p>![](images/Aspose.Words.a235e1fd-7bf5-4887-b33d-8264cb0c61e9.001.png)</p>|<p>2.</p><p>![](images/Aspose.Words.a235e1fd-7bf5-4887-b33d-8264cb0c61e9.002.png)</p>|<p>3.</p><p>![](images/Aspose.Words.a235e1fd-7bf5-4887-b33d-8264cb0c61e9.003.png)</p>|
| :- | :- | :- |
|<p>4.</p><p>![](images/Aspose.Words.a235e1fd-7bf5-4887-b33d-8264cb0c61e9.004.png)</p>|<p>5.</p><p>![](images/Aspose.Words.a235e1fd-7bf5-4887-b33d-8264cb0c61e9.005.png)</p>|<p>6.</p><p>![](images/team.jpeg)</p>|

Image 1. Represents Ashish was offered a job in a startup as a website developer, he selection happened via campus placements and he decided to accept the offer . On his first day in the organisation, he was introduced to all his team members and he was placed into a new project, in that project his team lead had asked him to develop various functions in python (which he thinks would be applicable)  for a online book store website , and write a code for the same. He started thinking about various test cases and finally  he figured out a test-case i.e inserting names of a list of available books in the store, and this would be done by the website admin. So he decided to write a function for the same using python programming language 

```py
list_of_books=[]
def normalize_book_names(book_list):
    normalized_books=[]
    for books in list_of_books:
        books=books.lower()
        books=books.capitalize()
        normalized_books.append(books)
    return normalized_books
number_of_books=int(input('How Many Book Names you want to insert?'))
for i in range(0,number_of_books):
    book_names=input('Enter Book Name')
    list_of_books.append(book_names)
books_normalized=normalize_book_names(list_of_books)
print(books_normalized)

```

He wrote the code for the above function. The above function takes a list of book names as a input, if the book name entered by the user is in upper case, it converts it into lower case,after which it converts only the first character of the book name to uppercase, because he thought that the first letter of the book name should always be in capital letter. He tested the above code using all kinds of inputs, and his code seemed to be working fine. He decided to show the code to his team lead after which he could proceed further.

Image 2. Represents that Ashish’s team lead is looking at the code which he had written , he said that the code looks fine , it is working for all kinds of input but the code should be more generalised, he suggested him to use high order functions.  

Image 3, Represents that since ashish was not aware about high order functions in python, he decided to explore more about that topics

So, now let us understand what are high order functions in python

High order functions are also known as first class functions.High order functions are very often used in today’s popular frameworks such as react, angular.js etc. High order functions have the following characteristics:

- **It can take another function as a parameter**→ All high order functions which takes function as a parameter, do some operation according to the function. 

Let us understand with the help of the below given example:

list_of_schools_in_hyderabad[' GLENDALE',' OAKRIDGE',' BIRLA','MERIDIAN','DRS',' JOHNSON']

1. In the above list we have a list of strings which contains school names in hyderabad. As we can observe in the above list, some of the elements present in the dictionary consist of some extra spaces in the beginning and of the string, and all the elements present in the list are in uppercase.
1. Now, we are going to write a function which will remove the extra spaces from the strings(if they exist) and will convert all the elements present in the list into a lower case, using built in functions available in python. 
1. We will be using strip() function to remove the extra spaces from the beginning and end of each string , and lower() function to convert every string present in the list into a lower case


```py
list_of_schools_in_hyderabad=[' GLENDALE',' OAKRIDGE',' BIRLA','MERIDIAN','DRS',' JOHNSON']
def normalize_school_names(list_of_schools):
    normalized_names_of_school=[]
    for school_name in list_of_schools:
        school_name=school_name.strip()
        school_name=school_name.lower()
        normalized_names_of_school.append(school_name)
    return normalized_names_of_school
```

- In the above function named ‘normlize_school_names’ we pass a list of strings(consists of school names) as an argument, inside the function, we create a new list named ‘normalized_names_of_schools’, this list will receive all the strings which was present inside the list named ‘list_of_schools_in_hyderabad’ as a parameter, then we apply the strip() function to remove extra spaces from all the strings and after that apply lower() function to convert them into lower case, and then using append() function we insert all our normalized strings inside a list named ‘normalized_names_of_school

school_names_normalized=normalize_school_names(list_of_schools_in_hyderabad)

print(school_names_normalized)

- The above code represents, to test the function we created a variable named school_names_normalized, and call our function by passing a list named ‘list_of_schools_in_hyderabad’ as a parameter
- Finally, in order to observe the output, we print the ‘school_names_normalized’ variable

['glendale', 'oakridge', 'birla', 'meridian', 'drs', 'johnson']

- In the above output, we can observe that there are no extra spaces present in the list of strings, and all of the strings have been converted into a lowercase.
- The above function works fine, but it can be simplified further by passing a function as a parameter.so lets modify the above created function into a more simplified version.

list_of_schools_in_hyderabad=[' GLENDALE',' OAKRIDGE',' BIRLA','MERIDIAN','DRS',' JOHNSON']

normalization_function=[str.strip,str.lower] #Creating a list of built in functions which we are going to use
```py
def normalize_school_names(list_of_schools,functions):
    normalized_names_of_school=[]
    for school_name in list_of_schools:
        for function in functions:
            school_name=function(school_name)
        normalized_names_of_school.append(school_name)
    return normalized_names_of_school
school_names_normalized=normalize_school_names(list_of_schools_in_hyderabad,normalization_function)
print(school_names_normalized) #Passing a list of strings as well as list of functions as a parameter  
```  

- In the above function, we go through each item present in the list named ‘list_of_schools’ and we also go through the functions list which we have created in a variable named ‘normalization_function’, which consist of list of built in function such as strip() and lower() , and we can iterate through the functions list in the inner for loop as represented in the above code.
- The above function is more simple compared to the function which we had created previously.



- **It can return a function→** In python, it is totally allowed that a function can return another function, because in python functions are treated as objects.

```py
def num_1(x):
    def num_2(y):
        return x*y
    return num_2 # Returning a function
```

1. In the above example, we have 2 functions i.e num_1(x) → outer function, which accepts one number as an argument/parameter, and num_2(y)--> nested function, which accepts one number as an argument/parameter and performs multiplication of both numbers i.e x & y.
1. But in order to access the nested function (num_2() ), we first need to call the num_1() function and pass a number as a argument/parameter and after that we will be able to access the num_2() function which accepts another number as a parameter and performs multiplication of both the numbers obtained from function num_1() and num_2() and we are returning the function num_2



```py
object_1=num_1(2) # x=2
print(object_1(3))
```

1. The above code explains that we are calling the outer  function i.e num_1() with the help of the variable object_1, and now we will be able to call that variable as the memory address of that function 

- **Decorators→** Decorators modify the functionality of an already existing function,i.e you can change the behaviour of the existing function at the compile time itself. Using decorators you can also facilitate adding extra features in the existing function

```py
def make_a_ordinary_person_Rich(func):
    def inner():
        print("I got Rich")
        func()
    return inner

def ordinary_person():
    print("I am ordinary person")
```

1. In the above example, we have created 2 functions i.e ordinary_person() which prints “I am  ordinary person” ,make_a_ordinary_person_Rich() that takes a function as its argument and has a nested function named inner(), and returns the inner function.
2. When we call the ordinary_person() function normally, we will get the output as , “I am ordinary person” , now let us call the same using the decorator function.

```py
def make_a_ordinary_person_Rich(func):
    # define the inner function 
    def inner():
        # add some additional behavior to decorated function
        print("I got Rich")

        # call original function
        func()
    # return the inner function
    return inner

# define ordinary_person function
def ordinary_person():
    print("I am ordinary person")

```

o/p:

I got rich

I am ordinary person


1. In the example shown above, make_a_ordinary_person_Rich() is a decorator.

```py
decorated_func = make_a_ordinary_person_rich(ordinary_person)
```

2. In the above code,we are now passing the ordinary_person() function as the argument to the make_a_ordinary_person_Rich() function.

3. The make_a_ordinary_person_Rich() function returns the inner function, and it is now assigned to the decorated_func variable.

Image 4.Describes that Ashish now understood the concept of higher order functions in python, and he finally decided to convert his previously written code into a higher order function , which accepts a function as an argument. 
```py
list_of_books=[]
normalization_function=[str.lower,str.capitalize]
def normalize_book_names(book_list,functions):
    normalized_books=[]
    for books in list_of_books:
        for function in functions:
            book_name=function(books)
        normalized_books.append(book_name)
    return normalized_books
number_of_books=int(input('How Many Book Names you want to insert?'))
for i in range(0,number_of_books):
    book_names=input('Enter Book Name')
    list_of_books.append(book_names)
books_normalized=normalize_book_names(list_of_books,normalization_function)
print(books_normalized)
```

Now, before moving to the next test-case Ashish decides to show the newly written code to his team lead and obtain his feedback for the same.

Image 5. Describes that his team lead gave a thumbs-up to his code, and asked him to proceed further. 

Image 6. Describes that Ashish was satisfied because he learnt something new on his first day at the organisation, which he had never learned in college


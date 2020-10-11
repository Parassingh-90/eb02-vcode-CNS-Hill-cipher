### Aim
Student must be able to understand the concept of encryption and decryption process using Hill cipher.
### Theory
<div align="justify">Hill cipher is based on linear algebra which is an example of polygraphic substitution cipher. In hill cipher technique each letter is represented by a number like A=0,B=1,C=2...Z=25. In hill cipher take module 26 to encrypt a message. Each block of n letters (considered as an n-component vector) is multiplied by an invertible n × n matrix(in this 2X2 matrix is taken for key value) , against modulus 26. To decrypt the message, each block is multiplied by the inverse of the matrix used for encryption. The matrix used for encryption is the cipher key, and it should be chosen randomly from the set of invertible n × n matrices (modulo 26). In order to decrypt, we turn the ciphertext back into a vector, then simply multiply by the inverse matrix of the key matrix.</div><br>
Rules for selecting the encrypting matrix:-<br>
1. Not all matrices have an inverse. If matrix determinant is not zero that matrix will have an only inverse.<br>
2. The encrypting matrix determinant must not have any common factors with the modular base.<br>

So, if we work modulo 26 for above, the determinant must be nonzero, and it cannot be divisible by 2 or 13.The matrix cannot be used in the Hill cipher If the determinant is 0, or has common factors with the modular base, so another matrix must be chosen (otherwise it will not be possible to decrypt). Matrices which satisfy the above conditions to be used in the Hill cipher only.</div>
### Procedure
1. User has to provide the key matrix in the text box provided in the first pane of the simulator.<br>
2. Click on the “Submit” button. It takes you to second form in which you have to enter plaintext.<br>
3. Click on “ Submit“ button.Then two "Next" and "Reset"buttons appears in the first pane.<br>
4. Click on “next “button. It provides the logical explanation of the output i.e. how the cipher text coressponding to entered plain text is being calculated.<br>
5. Click on “Next” button. The cipher text is displayed as output in the third pane, with the end of logical explanation of encryption.<br>
6. Click on “Next” button.Two "Yes" and "No" buttons appears in the first pane from where user has to chosse whether he want to go for decryption or not.<br>
7. If user click on "Yes".It provides the plain text corresponding to generated cipher text with the end of logical explaination of decryption and user can use “Reset” button to demonstrate hill cipher for another inputs.<br>
8. If user click on "No"."Reset" button will appear in the the first pane which can be used by the user to demonstrate hill cipher for another inputs.<br>
9. User can use “Reset” button to demonstrate hill cipher for another inputs .<br>
### Pre Test
Q. What is matrix?<br>
a. An equation of over 5 numbers or symbols .<br>
<b>b. A set of numbers in rows and columns.</b><br>
c. A method of finding the nth value of a series.<br>
d. A complicated number system.<br>

Q.What must be true in order to determine inverse of matrix?<br>
a. They must be square.<br>
b. The dimensions/size must be equal.<br>
<b>c. The determinant can't equal 0.</b><br>
d. The column of the 1st must equal the row of the 2nd.<br>

Q.You can multiply a 2X3 matrix by which matrix below?<br>
a. 2X2<br>
b. 2X1<br>
<b>c. 3X12</b><br>
d. 2X3<br>

Q. Can you multiply a 3 x 4 matrix with a 4 x 2 matrix?<br>
<b>a. Yes</b><br>
b. No<br>

Q.How many columns are in a 5 x 4 matrix?<br>
a. 5<br>
<b>b. 4</b><br>
c. 2<br>
d. 9<br>

### Post Test
Q. Hill cipher requires prerequisite knowledge of?<br>
a. Integration<br>
b. Differentiation<br>
<b>c. Matrix algebra</b><br>
d. Differential equation<br><br>

Q. Hill cipher is an example of ____________<br>
<b>a. Polygraphic substitution cipher</b><br>
b. Mono-substitution cipher<br>
c. Transposition cipher<br>
d. Additive cipher<br><br>

Q. Encryption in hill cipher is done using ______<br>
<b>a. Matrix multiplication</b><br>
b. a 5×5 table<br>
c. Vigenere table<br>
d. Matrix inversion<br><br>

Q. What is poly graphic substitution cipher?<br>
a. A Substitution based cipher which uses multiple substitutions at different positions<br>
b. A Substitution based cipher which uses fixed substitution over entire plain text<br>
<b>c. A Substitution based cipher in which substitution is performed over a block of letters</b><br>
d. A Transposition based cipher which uses fixed substitution over entire plain text.<br><br>

Q. A key matrix used for encryption in hill cipher must be?<br>
<b>a. Invertible Matrix</b><br>
b. Non Invertible Matrix<br>
c. Square Matrix<br>
d. Rectangular Matrix<br>
### References<br>
1. Cryptography and Network Security, Atul Khate, 2nd edition, TMH, 2006<br>
2. Cryptography and Network security, William Stallings, 4th edition, Pearson Education, 2010

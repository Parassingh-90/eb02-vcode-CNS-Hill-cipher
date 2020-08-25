### Aim
Write a program in jav to perform encryption and decryption using hill cipher.
### Theory
Hill cipher is a polygraphic substitution cipher based on linear algebra.Each letter is represented by a number modulo 26. Often the simple scheme A = 0, B = 1, …, Z = 25 is used, but this is not an essential feature of the cipher. To encrypt a message, each block of n letters (considered as an n-component vector) is multiplied by an invertible n × n matrix, against modulus 26. To decrypt the message, each block is multiplied by the inverse of the matrix used for encryption.The matrix used for encryption is the cipher key, and it should be chosen randomly from the set of invertible n × n matrices (modulo 26).In order to decrypt, we turn the ciphertext back into a vector, then simply multiply by the inverse matrix of the key matrix.<br>
Two complications exist in picking the encrypting matrix:<br>
1)Not all matrices have an inverse (see invertible matrix). The matrix will have an inverse if and only if its determinant is not zero.<br>
2)The determinant of the encrypting matrix must not have any common factors with the modular base.<br>

Thus, if we work modulo 26 as above, the determinant must be nonzero, and must not be divisible by 2 or 13. If the determinant is 0, or has common factors with the modular base, then the matrix cannot be used in the Hill cipher, and another matrix must be chosen (otherwise it will not be possible to decrypt). Fortunately, matrices which satisfy the conditions to be used in the Hill cipher are fairly common.
### Procedure
1)User has to provide the key matrix in the text box provided in the first pane of the simulator.<br>
2)Click on the “Submit” button. It takes you to second form in which you have to enter plaintext.<br>
3)Click on “ Submit“ button.Then two "Next" and "Reset"buttons appears in the first pane.<br>
4)Click on “next “button. It provides the logical explanation of the output i.e. how the cipher text coressponding to entered plain text is being calculated.<br>
5)Click on “Next” button. The cipher text is displayed as output in the third pane, with the end of logical explanation of encryption.<br>
6)Click on “Next” button.Two "Yes" and "No" buttons appears in the first pane from where user has to chosse whether he want to go for decryption or not.<br>
7)If user click on "Yes".It provides the plain text corresponding to generated cipher text with the end of logical explaination of decryption and user can use “Reset” button to demonstrate hill cipher for another inputs.<br>
8) If user click on "No"."Reset" button will appear in the the first pane which can be used by the user to demonstrate hill cipher for another inputs.<br>
9)User can use “Reset” button to demonstrate hill cipher for another inputs .<br>
### Pre Test

### Post Test
Q. Hill cipher requires prerequisite knowledge of?<br>
a) integration<br>
b) differentiation<br>
<b>c) matrix algebra</b><br>
d) differential equation<br><br>

Q. Hill cipher is an example of ____________<br>
a) mono-alphabetic cipher<br>
<b>b) substitution cipher</b><br>
c) transposition cipher<br>
d) additive cipher<br><br>

Q. Encryption in hill cipher is done using ______________<br>
<b>a) matrix multiplication</b><br>
b) a 5×5 table<br>
c) vigenere table<br>
d) matrix inversion<br><br>

Q. What is poly graphic substitution cipher?<br>
a) a substitution based cipher which uses multiple substitutions at different positions<br>
b) a substitution based cipher which uses fixed substitution over entire plain text<br>
<b>c) a substitution based cipher in which substitution is performed over a block of letters</b><br>
d) a transposition based cipher which uses fixed substitution over entire plain text.<br><br>

Q. A key matrix used for encryption in hill cipher must be?<br>
<b>a) invertible matrix</b><br>
b) non invertible matrix<br>
c) square matrix<br>
d) rectangular matrix<br>
### References
1.

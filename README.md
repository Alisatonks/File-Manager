# File-Manager

1) Navigate to directory:
cd path_to_directory. In path_to_directory no "" needed. Just enter path even with whitespace;

The same in functions with 1 arg: cat, delete, hash;

2) Create empty file in current working directory:
add new_file_name. Go to directory you want to create file and enter: add new_file_name;

3) Rename:
rn path_to_file new_filename. If new_filename contains whitespace, wrap it in "". (if there are whitespace in path_to_file, no "" needed even if directory contains whitespace);

4) Copy file:
cp path_to_file path_to_new_directory. If folder or filename in path include whitespace, wrap whole path in "".
Example 1: cp "test 123/test 456/new Read.txt" "src/filesOperations/new files";
Example 2: cp newFile.txt src/filesOperations/files;

5) Move file:
mv path_to_file path_to_new_directory. The same as in Copy file: If folder or filename in path include whitespace, wrap whole path in "".
Example 1: cp "test 123/test 456/new Read.txt" "src/filesOperations/new files";
Example 2: cp newFile.txt src/filesOperations/files;

6) Delete file: 
rm path_to_file. In path_to_file no "" needed. Just enter path even with whitespace;

7) Calculate hash.
hash path_to_file. No "" needed.

8) Compress file:
compress path_to_file path_to_destination. If folder or filename in path include whitespace, wrap whole path in "" (example: compress "test 123\calc hash.txt" "test 123");

9) Decompress: the same as for compress.
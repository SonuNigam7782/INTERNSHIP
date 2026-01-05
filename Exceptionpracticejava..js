class ExceptionPractice {
    public static void main(String[] args)
    System.out.println("Arithmetic Exception Example");
    try {int a = 7;
        int b = 0;
        int c = a / b;
        System.out.println("Result = " + c);
        }
    catch (ArithmeticException e) {
        System.out.println("Cannot divide by zero");
    }
    
    
    System.out.println("\nArray Exception Example");
     try {
         int arr[] = {2, 2, 3};
         System.out.println(arr[5]);
        }
    catch (ArrayIndexOutOfBoundsException e) {
        System.out.println("Array index is not valid");
        }
    
    
    
        System.out.println("\nNull Pointer Exception Example");
      try {
          String name = null;
          System.out.println(name.length());
        } 
        catch (NullPointerException e) {
            System.out.println("Value is null");
        }
       System.out.println("\nProgram End");
    }
}


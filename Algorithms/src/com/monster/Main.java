package com.monster;

public class Main {

    public static void main(String[] args) {
	// write your code here
        System.out.println("Hello Main!");
        // annotation for quick test
        String[] strList = {"5", "100.0", "200.0"};
        RandomSeq.stdout(strList);
        System.out.println("----------------------------------");

        FixedCapacityStack<String> s;
        s = new FixedCapacityStack<String>(100);
        while (true) {
            if (!(!StdIn.isEmpty())) break;
            String item = StdIn.readString();
            if (!item.equals("-"))
                s.push(item);
            else if (!s.isEmpty())
                StdOut.print(s.pop() + " ");
        }
        StdOut.println("(" + s.size() + " left on stack)");
    }
}

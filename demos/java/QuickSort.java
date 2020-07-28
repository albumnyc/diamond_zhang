public class QuickSort {
    public static void quickSort(int[] arr, int startIndex, int endIndex) {
        //递归结束条件：startIndex>=endIndex
        if (startIndex >= endIndex) {
            return;
        }

        //得到基准元素位置
        int pivotIndex = partition(arr, startIndex, endIndex);
        quickSort(arr, startIndex, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, endIndex);
    }

    private static int partition(int[] arr, int startIndex, int endIndex) {
        int pivot = arr[startIndex];
        int left = startIndex;
        int right = endIndex;

        while (right != left) {
            //控制right指针比较并左移
            while (right > left && arr[right] > pivot) {
                right--;
            }

            //left指针比较并右移
            while (right > left && arr[left] <= pivot) {
                left++;
            }

            //交换left和right指向的元素
            if (left < right) {
                int p = arr[left];
                arr[left] = arr[right];
                arr[right] = p;
            }
        }

        //pivot和指针重合点交换
        int p = arr[left];
        arr[left] = arr[startIndex];
        arr[startIndex] = p;

        return left;
    }
}

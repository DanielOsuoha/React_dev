from heapq import heappush, heappop, heapify

def find_minimum(boxes):
    n = len(boxes)
    min_heap = boxes[::]
    max_heap = [-x for x in boxes]
    heapify(min_heap)
    heapify(max_heap)
    d = 0
    while abs(-max_heap[0] - min_heap[0]) > 1:
        d += 1
        a = -heappop(max_heap)
        b = heappop(min_heap)
        a -= 1
        b += 1
        heappush(max_heap, -a)
        heappush(min_heap, b)
    return d

print(find_minimum([5,5,8,7])) # 2 
print(find_minimum([2, 4, 1])) # 1
print(find_minimum([4, 4, 4, 4])) # 0


max= [7,7,5, 5]
min = [6,6,8,8]
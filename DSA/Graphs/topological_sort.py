# perform dfs and use a queue and append left each time 

class Solution:
    def properOrderOfDAG(self, graph):
        from collections import deque
        visited, order = set(),deque()
        on_path = set()
        def dfs(node):
            if node in on_path:
                return False
            if node in visited:
                return True
            visited.add(node)
            on_path.add(node)
            if node in graph:
                for child in graph[node]:
                    if not dfs(child):
                        return False
            order.appendleft(node)
            on_path.remove(node)
            return True
        

        for node in graph:
            if node not in visited:
                if not dfs(node):
                    return False
        return True

        # return list(order)

graph = {
    0: [1, 2],
    6: [1, 5],
    1: [5, 2],
    5: [3, 4],
    2: [3],
    4: []
}

solution = Solution()
result = solution.properOrderOfDAG(graph)
print(result)
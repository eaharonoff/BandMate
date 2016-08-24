def find_or_add(root_node, node)
  if node.value < root_node.value
      if root_node.left
          find_or_add(root_node.left, node)
        else
            root_node.left = node
        end
      end
  else if ... right side
end

def in_order(root_node)
  if root_node.left
    puts root_node.left
    in_order(root_node.left)
  #until we no longer HAVE a left node
  end
  root_node
  if root_node.right
    in_order(root_node.right)
  end
  node
end

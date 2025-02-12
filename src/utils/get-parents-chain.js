export default function getParentsChain(childElement, rootElement) {
	const chain = []
  let element = childElement

  while(element.parentNode && element !== rootElement) {
    chain.unshift(element.parentNode)
    element = element.parentNode
  }

  return chain
}

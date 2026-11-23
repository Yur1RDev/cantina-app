export const lanches = [
    { id: '1', nome: 'X-Salada', descricao: 'Pão, hambúrguer, queijo, alface e tomate', preco: 12.0, emoji: '🍔', categoria: 'Salgados', disponivel: true },
    { id: '2', nome: 'Coxinha', descricao: 'Coxinha de frango crocante', preco: 6.5, emoji: '🍗', categoria: 'Salgados', disponivel: true },
    { id: '3', nome: 'Pastel de Queijo', descricao: 'Pastel frito na hora', preco: 7.0, emoji: '🥟', categoria: 'Salgados', disponivel: true },
    { id: '4', nome: 'Pão de Queijo', descricao: 'Quentinho e macio', preco: 4.0, emoji: '🧀', categoria: 'Salgados', disponivel: false },
    { id: '5', nome: 'Suco de Laranja', descricao: 'Natural, feito na hora', preco: 6.0, emoji: '🍊', categoria: 'Bebidas', disponivel: true },
    { id: '6', nome: 'Refrigerante Lata', descricao: 'Diversos sabores', preco: 5.5, emoji: '🥤', categoria: 'Bebidas', disponivel: true },
    { id: '7', nome: 'Bolo de Chocolate', descricao: 'Fatia generosa com cobertura', preco: 7.5, emoji: '🍰', categoria: 'Doces', disponivel: true },
    { id: '8', nome: 'Sorvete', descricao: 'Casquinha com 2 bolas', preco: 8.5, emoji: '🍦', categoria: 'Doces', disponivel: false },
]

export function buscarLanche(id) {
    return lanches.find((lanche) => lanche.id === id)
}
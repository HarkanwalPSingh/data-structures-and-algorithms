var beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"] // O(n)

beasts.inderOf("Hydra")

beasts.findIndex(function(item) {
    return item === "Hydra"
})

beasts.find(function(item){
    return item === "Hydra"
})

beasts.includes("Hydra")
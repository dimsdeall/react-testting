const penjumlahan = (angka1, angka2) => {
    return angka1 + angka2
}

const perkalian = (angka1, angka2) => {
    return angka1 * angka2
}

test("Testing Sederhana", () => {
    expect(true).toBe(true)
})

test("Menjumlahkan Nilai", () => {
    expect(1 + 1).toBe(2)
    expect(2 * 3).toBe(6)
})

test("Perkalian", () => {
    expect(perkalian(3,2)).toBe(6)
    expect(perkalian(5,3)).toBe(15)
})

test("Fungsi Penjumlahan", () => {
    expect(penjumlahan(3, 2)).toBe(5)
    expect(penjumlahan(4, 8)).toBe(12)
})
export default function(achievements) {
    let tab = {}
    let list = []
    achievements.forEach(({ Associations }) => list.push(...Associations));
    list.forEach(subject => tab[subject] = ~~tab[subject] + 1)

    // sorry for this eyesore, it works tho. basically, it sorts the subjects by frequency
    // and returns the most frequent

    return Object.entries(tab).map(([k, v]) => `${v}: ${k}`).sort().slice(-1)[0].split(': ')[1]
}

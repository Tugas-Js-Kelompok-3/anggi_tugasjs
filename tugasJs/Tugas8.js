// soal 3
function array(value) {
    const result = value.map(el => {
        const newArr = ""
        return el += newArr
    })
    const split = result[3].split(',')
    result.pop()
    console.log(result,split.join(' '))
}
array(['hallo','nama','saya',['amelia','susanti', ['kelas',['11', ['rpl','2']]]]])

// soal 4
const obj = {
    nama: "amelia",
    kelas: "RPL 2",
    umur: 17,
    nikah: false,
    Hp: {
      nama: "oppo A5s",
      spesifikasiHp: {
          chipset: "Snapdragon 720G",
          ram: "6 GB",
          rom: "128 GB",
          camera: "64mp"
          }
      }
    }
  console.log(obj.Hp); 
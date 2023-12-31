interface iNaijaSchools {
 code: string
  name: string
  type: "Federal" | "State" | "Private" | "Polytechnics" | "College"
 location: string
  website: string
  founded: string
  logo?: string
}

export const NaijaSchools: iNaijaSchools[] = [
  {
    "code": "MOUAU",
    "name": "Michael Okpara University of Agriculture",
    "founded": "1992",
    "location": "Umudike, Abia State",
    "website": "https://mouau.edu.ng",
    "type": "Federal"
  },
  {
    "code": "UNIZIK",
    "name": "Nnamdi Azikiwe University",
    "founded": "1992",
    "location": "Awka, Anambra State",
    "website": "https://unizik.edu.ng",
    "type": "Federal"
  },
  {
    "code": "OSUSTECH",
    "name": "Ondo State University of Science and Technology",
    "founded": "2008",
    "location": "Okitipupa, Ondo State",
    "website": "https://osustech.edu.ng",
    "type": "State"
  },
  {
    "code": "FUOYE",
    "name": "Federal University Oye-Ekiti",
    "founded": "2011",
    "location": "Oye-Ekiti, Ekiti State",
    "website": "https://fuoye.edu.ng",
    "type": "Federal"
  },
  {
    "code": "FUTO",
    "name": "Federal University of Technology, Owerri",
    "founded": "1980",
    "location": "Owerri, Imo State",
    "website": "https://futo.edu.ng",
    "type": "Federal"
  },
  {
    "code": "FUNAI",
    "name": "Alex Ekwueme Federal University, Ndufu-Alike",
    "founded": "2011",
    "location": "Ebonyi State",
    "website": "https://funai.edu.ng",
    "type": "Federal"
  },
  {
    "code": "DELSU",
    "name": "Delta State University",
    "founded": "1992",
    "location": "Abraka, Delta State",
    "website": "https://delsu.edu.ng",
    "type": "State"
  },
  {
    "code": "UNIZIK",
    "name": "Nnamdi Azikiwe University",
    "founded": "1992",
    "location": "Awka, Anambra State",
    "website": "https://unizik.edu.ng",
    "type": "Federal"
  },
  {
    "code": "GSU",
    "name": "Gombe State University",
    "founded": "2004",
    "location": "Gombe, Gombe State",
    "website": "https://gsu.edu.ng",
    "type": "State"
  },
  {
    "code": "ESUTECH",
    "name": "Enugu State University of Science and Technology",
    "founded": "1980",
    "location": "Enugu, Enugu State",
    "website": "https://esut.edu.ng",
    "type": "State"
  },
  {
    "code": "UMYUK",
    "name": "Umaru Musa Yar'adua University",
    "founded": "2006",
    "location": "Katsina, Katsina State",
    "website": "https://umyu.edu.ng",
    "type": "Federal"
  },
  {
    "code": "UNIUYO",
    "name": "University of Uyo",

  },

  {
    "code": "UNILAG",
    "name": "University of Lagos",
    "founded": "1962",
    "location": "Lagos",
    "website": "https://unilag.edu.ng",
    "type": "Federal"
  },
  {
    "code": "OAU",
    "name": "Obafemi Awolowo University",
    "founded": "1961",
    "location": "Ile-Ife, Osun State",
    "website": "https://oauife.edu.ng",
    "type": "Federal"
  },
  {
    "code": "UI",
    "name": "University of Ibadan",
    "founded": "1948",
    "location": "Ibadan, Oyo State",
    "website": "https://ui.edu.ng",
    "type": "Federal"
  },
  {
    "code": "ABU",
    "name": "Ahmadu Bello University",
    "founded": "1962",
    "location": "Zaria, Kaduna State",
    "website": "https://abu.edu.ng",
    "type": "Federal"
  },
  {
    "code": "UNIBEN",
    "name": "University of Benin",
    "founded": "1970",
    "location": "Benin City, Edo State",
    "website": "https://uniben.edu",
    "type": "Federal"
  },
  {
    "code": "FUTMINNA",
    "name": "Federal University of Technology, Minna",
    "founded": "1983",
    "location": "Minna, Niger State",
    "website": "https://futminna.edu.ng",
    "type": "Federal"
  },
  {
    "code": "UNILORIN",
    "name": "University of Ilorin",
    "founded": "1975",
    "location": "Ilorin, Kwara State",
    "website": "https://unilorin.edu.ng",
    "type": "Federal"
  },
  {
    "code": "UNN",
    "name": "University of Nigeria, Nsukka",
    "founded": "1960",
    "location": "Nsukka, Enugu State",
    "website": "https://unn.edu.ng",
    "type": "Federal"
  },
  {
    "code": "BUK",
    "name": "Bayero University Kano",
    "founded": "1975",
    "location": "Kano, Kano State",
    "website": "https://buk.edu.ng",
    "type": "Federal"
  },
  {
    "code": "UNIPORT",
    "name": "University of Port Harcourt",
    "founded": "1975",
    "location": "Port Harcourt, Rivers State",
    "website": "https://uniport.edu.ng",
    "type": "Federal"
  },
  {
    "code": "LASU",
    "name": "Lagos State University",
    "founded": "1983",
    "location": "Ojo, Lagos State",
    "website": "https://lasu.edu.ng",
    "type": "State"
  },
  {
    "code": "FUTA",
    "name": "Federal University of Technology, Akure",
    "founded": "1981",
    "location": "Akure, Ondo State",
    "website": "https://futa.edu.ng",
    "type": "Federal"
  },
  {
    "code": "CU",
    "name": "Covenant University",
    "founded": "2002",
    "location": "Ota, Ogun State",
    "website": "https://covenantuniversity.edu.ng",
    "type": "Private"
  },
  {
    "code": "UDUSOK",
    "name": "Usmanu Danfodiyo University",
    "founded": "1975",
    "location": "Sokoto, Sokoto State",
    "website": "https://udusok.edu.ng",
    "type": "Federal"
  },
  {
    "code": "AAUA",
    "name": "Adekunle Ajasin University",
    "founded": "1999",
    "location": "Akungba Akoko, Ondo State",
    "website": "https://aaua.edu.ng",
    "type": "State"
  },
  {
    "code": "ABUAD",
    "name": "Afe Babalola University",
    "founded": "2009",
    "location": "Ado-Ekiti, Ekiti State",
    "website": "https://abuad.edu.ng",
    "type": "Private"
  },
  {
    "code": "EKSU",
    "name": "Ekiti State University",
    "founded": "1982",
    "location": "Ado-Ekiti, Ekiti State",
    "website": "https://eksu.edu.ng",
    "type": "State"
  },
  {
    "code": "FUNAAB",
    "name": "Federal University of Agriculture, Abeokuta",
    "founded": "1988",
    "location": "Abeokuta, Ogun State",
    "website": "https://funaab.edu.ng",
    "type": "Federal"
  },
  {
    "code": "KSU",
    "name": "Kogi State University",
    "founded": "1999",
    "location": "Anyigba, Kogi State",
    "website": "https://ksu.edu.ng",
    "type": "State"
  },
  {
    "code": "RSUST",
    "name": "Rivers State University",
    "founded": "1972",
    "location": "Port Harcourt, Rivers State",
    "website": "https://rsu.edu.ng",
    "type": "State"
  }
]
 






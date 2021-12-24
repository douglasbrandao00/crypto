export type UserCandidate = {
      name: string
      email: string
      password: string
      confirmPassword:string
}

export class RegisterUser {
  constructor(private readonly candidate: UserCandidate) {}

  handle() {
    const candidate = this.candidate
    if(
      !candidate.name ||
      !candidate.email ||
      !candidate.password ||
      !candidate.confirmPassword
    ) {
      throw new Error()
    }
    const accetableEspecialCharacters = /[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]+/
    const unaccetableEspecialCharacters = /^['"`]*$/
    const passwordNumberAmount = candidate.password.replace(/\D/g, '').length

    if(candidate.name.length < 4) throw new Error()
    if(candidate.password !== candidate.confirmPassword) throw new Error()
    if(candidate.password.length < 8) throw new Error()
    if(passwordNumberAmount < 1) throw new Error()
    if(unaccetableEspecialCharacters.test(candidate.password)) throw new Error()
    if(!accetableEspecialCharacters.test(candidate.password)) throw new Error()
  }
}


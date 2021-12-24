export type UserCandidate = {
      name: string
      email: string
      password: string
      confirmPassword:string
}

export class RegisterUser {
  constructor(private readonly candidate: UserCandidate) {}

  handle() {
    this.validateUserCandidate()
  }

  validateUserCandidate() {
    this.hasCandidateBlankData()
    this.hasUserNameCorectLength()
    this.isPasswordEqualsToConfirmPassword()
    this.isPasswordLengthBiggerThanMinimun()
    this.isPasswordSecure()
  }

  hasCandidateBlankData(): void | Error {
    if(
      !this.candidate.name ||
      !this.candidate.email ||
      !this.candidate.password ||
      !this.candidate.confirmPassword
    ) {
      throw new Error()
    }
  }
  hasUserNameCorectLength() {
    if(this.candidate.name.length < 4) throw new Error()
  }
  isPasswordEqualsToConfirmPassword() {
    if(this.candidate.password !== this.candidate.confirmPassword) throw new Error()
  }
  isPasswordLengthBiggerThanMinimun(){
    if(this.candidate.password.length < 8) throw new Error()
  }
  isPasswordSecure() {
    const candidate = this.candidate
    const accetableEspecialCharacters = /[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]+/
    const unaccetableEspecialCharacters = /^['"`]*$/
    const passwordNumberAmount = candidate.password.replace(/\D/g, '').length

    if(passwordNumberAmount < 1) throw new Error()
    if(unaccetableEspecialCharacters.test(candidate.password)) throw new Error()
    if(!accetableEspecialCharacters.test(candidate.password)) throw new Error()

  }
}


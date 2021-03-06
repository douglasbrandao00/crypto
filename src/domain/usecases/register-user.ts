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
    const NAME_MINIMUN_LENGTH = 4
    if(this.candidate.name.length < NAME_MINIMUN_LENGTH) throw new Error()
  }
  isPasswordEqualsToConfirmPassword() {
    if(this.candidate.password !== this.candidate.confirmPassword) throw new Error()
  }
  isPasswordLengthBiggerThanMinimun(){
    const PASSWORD_MINIMUN_LENGTH = 8
    if(this.candidate.password.length < PASSWORD_MINIMUN_LENGTH) throw new Error()
  }
  isPasswordSecure() {
    const { password } = this.candidate

    const acceptableEspecialCharacters = /[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]+/
    const unacceptableEspecialCharacters = /^['"`]*$/

    const passwordHasNumber = /\d/.test(password)
    const hasAcceptableCharacter = acceptableEspecialCharacters.test(password)
    const hasUnacceptableCharacter = unacceptableEspecialCharacters.test(password)

    if(!passwordHasNumber) throw new Error()
    if(hasUnacceptableCharacter) throw new Error()
    if(!hasAcceptableCharacter) throw new Error()
  }
}


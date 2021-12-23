type UserCandidate = {
      name: string
      email: string
      password: string
      confirmPassword:string
}

class RegisterUser {
  constructor(private readonly candidate: UserCandidate) {}

  handle() {
    const candidate = this.candidate
    if(!candidate.name || !candidate.email || !candidate.password || !candidate.confirmPassword) {
      throw new Error()
    }

    if(candidate.name.length < 4) throw new Error()
  }
}

function userCandidateMock(): UserCandidate{
  return {
    name: 'any_name',
    email: 'any_email',
    password: 'any_password',
    confirmPassword: 'any_password',
  }

}

describe("RegisterUser", () => {
  test('Shoud return undefined if user candidate is valid', () => {
    const userCandidate = userCandidateMock()
    
    const registerUser = new RegisterUser(userCandidate)

    expect(registerUser.handle()).toEqual(undefined)
  })

  test("Shoud throw if user name is a empty string", () => {
    const userCandidate = userCandidateMock()
    userCandidate.name = ""
    
    const registerUser = new RegisterUser(userCandidate)

    expect(() => registerUser.handle()).toThrow()
  })

  test("Shoud throw if user email is a empty string", () => {
    const userCandidate = userCandidateMock()
    userCandidate.email = ""
    
    const registerUser = new RegisterUser(userCandidate)

    expect(() => registerUser.handle()).toThrow()
  })
  test("Shoud throw if user password is a empty string", () => {
    const userCandidate = userCandidateMock()
    userCandidate.password = ""
    
    const registerUser = new RegisterUser(userCandidate)

    expect(() => registerUser.handle()).toThrow()
  })
  test("Shoud throw if user confirmPassword is a empty string", () => {
    const userCandidate = userCandidateMock()
    userCandidate.confirmPassword = ""

    const registerUser = new RegisterUser(userCandidate)

    expect(() => registerUser.handle()).toThrow()
  })

  test('Shoud throw if user confirmPassword is a empty string', () => {
    const userCandidate = userCandidateMock()
    userCandidate.name = 'aaa'
    
    const registerUser = new RegisterUser(userCandidate)

    expect(() => registerUser.handle()).toThrow()
 })


})

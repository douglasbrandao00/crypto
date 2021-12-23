type UserCandidate = {
      name: string
      email: string
      password: string
      confirmPassword:string
}

class RegisterUser {
  constructor(private readonly candidate: UserCandidate) {}

  handle() {
    throw new Error()
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
  test("Shoud throw if user name is a empty string", () => {
    const userCandidate = userCandidateMock()
    userCandidate.name = ""
    const registerUser = new RegisterUser(userCandidate)

    expect(registerUser.handle).toThrow()
  })
})

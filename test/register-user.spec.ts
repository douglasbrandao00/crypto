import {UserCandidate, RegisterUser} from '../src/domain/usecases/register-user'

function userCandidateMock(): UserCandidate{
  return {
    name: 'any_name',
    email: 'any_email',
    password: 'any_password@1',
    confirmPassword: 'any_password@1',
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

  test('Shoud throw if user name has less than 4 characters', () => {
    const userCandidate = userCandidateMock()
    userCandidate.name = 'aaa'
    
    const registerUser = new RegisterUser(userCandidate)

    expect(() => registerUser.handle()).toThrow()
 })

  test('Shoud throw if user confirmPassword is differnt than password', () => {
    const userCandidate = userCandidateMock()
    userCandidate.confirmPassword = 'any_differnt_password'
    
    const registerUser = new RegisterUser(userCandidate)

    expect(() => registerUser.handle()).toThrow()
 })

  test('Shoud throw if user password has less than 8 characters', () => {
    const invalidPassword = 'abcdef1'// seven characters
    const userCandidate = userCandidateMock()
    userCandidate.password = invalidPassword
    userCandidate.confirmPassword = invalidPassword

    const registerUser = new RegisterUser(userCandidate)

    expect(() => registerUser.handle()).toThrow()
 })

  test('Shoud throw if user password has no number', () => {
  
    const invalidPassword = 'abcdefgh'// without number 
    const userCandidate = userCandidateMock()
    userCandidate.password = invalidPassword
    userCandidate.confirmPassword = invalidPassword

    const registerUser = new RegisterUser(userCandidate)

    expect(() => registerUser.handle()).toThrow()
 })

  test('Shoud throw if user password has no special character', () => {
    const invalidPassword = 'abcdefg1'// without special character 
    const userCandidate = userCandidateMock()
    userCandidate.password = invalidPassword
    userCandidate.confirmPassword = invalidPassword

    const registerUser = new RegisterUser(userCandidate)
    expect(() => registerUser.handle()).toThrow()
 })

  test('Shoud throw if user password has invalid special character', () => {
    const invalidPassword = 'abcdefg1`"'// without special character 
    const userCandidate = userCandidateMock()
    userCandidate.password = invalidPassword
    userCandidate.confirmPassword = invalidPassword

    const registerUser = new RegisterUser(userCandidate)
    expect(() => registerUser.handle()).toThrow()
 })

})

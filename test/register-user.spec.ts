import { UserCandidate, RegisterUser } from '../src/domain/usecases/register-user'
import {EmailValidator} from './domain/usecases/adapters/email-validator'

function userCandidateMock(): UserCandidate{
  return {
    name: 'any_name',
    email: 'any_email',
    password: 'any_password@1',
    confirmPassword: 'any_password@1',
  }
}

  class EmailValidatorSpy implements EmailValidator {
    valid = true 
    isValid(email: string): boolean {
        return this.valid
    }

  }
function makeSut (userCandidate: UserCandidate) {
  const emailValidator = new EmailValidatorSpy()
  const sut = new RegisterUser(userCandidate, emailValidator )

  return {
    sut,
    emailValidator
  }
}

describe("RegisterUser", () => {
  test('Shoud return undefined if user candidate is valid', () => {
    const userCandidate = userCandidateMock()
    
    const { sut } = makeSut(userCandidate)

    expect(sut.handle()).toEqual(undefined)
  })

  test("Shoud throw if user name is a empty string", () => {
    const userCandidate = userCandidateMock()
    userCandidate.name = ""
    
    const { sut } = makeSut(userCandidate)
    expect(() => sut .handle()).toThrow()
  })

  test("Shoud throw if user email is a empty string", () => {
    const userCandidate = userCandidateMock()
    userCandidate.email = ""
    
    const { sut } = makeSut(userCandidate)

    expect(() => sut.handle()).toThrow()
  })
  test("Shoud throw if user password is a empty string", () => {
    const userCandidate = userCandidateMock()
    userCandidate.password = ""
    
    const { sut } = makeSut(userCandidate)

    expect(() => sut.handle()).toThrow()
  })
  test("Shoud throw if user confirmPassword is a empty string", () => {
    const userCandidate = userCandidateMock()
    userCandidate.confirmPassword = ""

    const { sut } = makeSut(userCandidate)

    expect(() => sut.handle()).toThrow()
  })

  test('Shoud throw if user name has less than 4 characters', () => {
    const userCandidate = userCandidateMock()
    userCandidate.name = 'aaa'
    
    const { sut } = makeSut(userCandidate)

    expect(() => sut.handle()).toThrow()
 })

  test('Shoud throw if user confirmPassword is differnt than password', () => {
    const userCandidate = userCandidateMock()
    userCandidate.confirmPassword = 'any_differnt_password'
    
    const { sut } = makeSut(userCandidate)

    expect(() => sut.handle()).toThrow()
 })

  test('Shoud throw if user password has less than 8 characters', () => {
    const invalidPassword = 'abcde1@'// seven characters
    const userCandidate = userCandidateMock()
    userCandidate.password = invalidPassword
    userCandidate.confirmPassword = invalidPassword

    const { sut } = makeSut(userCandidate)

    expect(() => sut.handle()).toThrow()
 })

  test('Shoud throw if user password has no number', () => {
  
    const invalidPassword = 'abcdefh@'// without number 
    const userCandidate = userCandidateMock()
    userCandidate.password = invalidPassword
    userCandidate.confirmPassword = invalidPassword

    const { sut } = makeSut(userCandidate)

    expect(() => sut.handle()).toThrow()
 })

  test('Shoud throw if user password has no special character', () => {
    const invalidPassword = 'abcdefg1'// without special character 
    const userCandidate = userCandidateMock()
    userCandidate.password = invalidPassword
    userCandidate.confirmPassword = invalidPassword

    const { sut } = makeSut(userCandidate)
    expect(() => sut.handle()).toThrow()
 })

  test('Shoud throw if user password has invalid special character', () => {
    const invalidPassword = 'abcdefg1`"'// without special character 
    const userCandidate = userCandidateMock()
    userCandidate.password = invalidPassword
    userCandidate.confirmPassword = invalidPassword

    const { sut } = makeSut(userCandidate)
    expect(() => sut.handle()).toThrow()
 })
 
})

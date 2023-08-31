import 'should'
import { hello } from '../src'
import { describe, expect, it } from 'vitest'

require('should')

describe('hello', () => {
  it('should say name', () => {
    const sut = hello('alex')
    expect(sut).toEqual('hello, alex')
  })
})

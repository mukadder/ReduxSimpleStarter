import {expect} from '../test_helper'

import commentReducer from '../../src/reducers/comments'
import {SAVE_COMMENT} from '../../src/actions/types'

describe('commments reducer ', () => {
    it('handles action with unknown type ',() =>{
//expect(commentReducer()).to.be.instanceOf(Array)
expect(commentReducer(undefined,{})).to.be.eql([])
    })
    it('handles action with SAVE_COMMENT ',() =>{
        const action = {type:SAVE_COMMENT,payload:'new comment'}
        expect(commentReducer([],action)).to.eql(['new comment'])
    })
})
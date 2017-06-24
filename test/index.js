import test from 'ava'

import resolveMx from '..'

test('resolve to records', async t => {
  const records = await resolveMx('npmjs.com')
  t.is(records.length, 5)
})

test('reject invalid domain', async t => {
  await t.throws(resolveMx('no-such-domain.example.com'))
})

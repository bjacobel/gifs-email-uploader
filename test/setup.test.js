import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import 'sinon-as-promised';

global.expect = expect;
global.sinon = sinon;

chai.use(dirtyChai);
chai.use(sinonChai);

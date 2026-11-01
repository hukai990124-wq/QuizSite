import aif from '../../question-banks/aws-aif/bank.mjs';
import aip from '../../question-banks/aws-aip/bank.mjs';
import clf from '../../question-banks/aws-clf/bank.mjs';
import mla from '../../question-banks/aws-mla/bank.mjs';
import saa from '../../question-banks/aws-saa/bank.mjs';
import a1 from '../../question-banks/dele-a1/bank.mjs';
import a2 from '../../question-banks/dele-a2/bank.mjs';
import fe from '../../question-banks/fe/bank.mjs';
import java from '../../question-banks/java-bronze/bank.mjs';
import programming from '../../question-banks/programming/bank.mjs';
import listening from '../../question-banks/toeic-listening/bank.mjs';
import reading from '../../question-banks/toeic-reading/bank.mjs';
import opc from '../../question-banks/workbuddy-opc/bank.mjs';
import type { QuestionBank } from './model.mjs';

export const banks: readonly QuestionBank[] = [aif, aip, clf, mla, saa, a1, a2, fe, java, programming, listening, reading, opc];
